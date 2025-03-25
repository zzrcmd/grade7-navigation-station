addEventListener('fetch', event => {
        event.respondWith(handleRequest(event.request));
        });

        async function handleRequest(request) {
            const url = new URL(request.url);
                const path = url.pathname;

                    switch (path) {
                            case '/':
                                        return new Response('Welcome to the home page!', {
                                                        headers: { 'content-type': 'text/plain' },
                                                                    });
                                                                            case '/about':
                                                                                        return new Response('This is the about page.', {
                                                                                                        headers: { 'content-type': 'text/plain' },
                                                                                                                    });
                                                                                                                            default:
                                                                                                                                        return new Response('404 Not Found', {
                                                                                                                                                        status: 404,
                                                                                                                                                                        headers: { 'content-type': 'text/plain' },
                                                                                                                                                                                    });
                                                                                                                                                                                        }
                                                                                                                                                                                        }
})