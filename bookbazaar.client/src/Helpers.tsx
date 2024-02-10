
function isProductionEnvironment() {
    return process.env.NODE_ENV == 'production';
}

export function getEndpoint() {
    if (isProductionEnvironment())
        return 'https://bookbazaarserver20240206094222.azurewebsites.net/';
    else
        return 'https://localhost:7106/';
}
