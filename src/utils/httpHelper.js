const BaseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchServerData(endpoint, options = {}, tags = []) {
    const URL = `${BaseUrl}${endpoint}`
    const apiOptions = {
        cache: "force-cache",
        next: {
            revalidate: 10,
            tags: tags,
        },
        ...options,
    };
    // const startTime = performance.now();

    const res = await fetch(URL, apiOptions);

    const data = await res.json();
    // const endTime = performance.now();
    // const duration = endTime - startTime;
    // console.log(`✅ [fetchServerData] ${endpoint} took ${duration.toFixed(2)} ms`);
    // if (!res.ok) {
    //     if (data.error) {
    //         throw new Error(`NotFound: ${data.status || 404} ${data.message} ${data.error?.value}`);
    //     }
    //     throw new Error(`Fetch failed: ${res.status} ${res.statusText} ${data.errors?.msg}`);
    // }
    return data;
}
