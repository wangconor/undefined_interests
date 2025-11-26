export default {
    async fetch(request, env, ctx) {
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            });
        }

        if (request.method !== 'POST' || !request.url.endsWith('/api/chat')) {
            return new Response('Not found', { status: 404 });
        }

        try {
            const { message } = await request.json();
            console.log('Received:', message);

            const aiResponse = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
                messages: [
                    { role: 'system', content: 'You are an AI assistant for "Undefined Interests", a venture capital firm operating in the grey areas and undefined variables of the market. Your tone should be professional yet mysterious, using technical jargon related to the void, undefined variables, and null references. You are helpful but enigmatic. Keep responses concise.' },
                    { role: 'user', content: message }
                ]
            });

            console.log('AI Response:', aiResponse);

            return new Response(JSON.stringify({ response: aiResponse.response }), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            });
        } catch (error) {
            console.error('Error:', error);
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }
    }
};