
export async function doGet(url, cbSuc, cbErr, elm) {
    await fetch(url)
    .then(http => http.json())
    .then(response => {                
        if (typeof cbSuc === "function" && response) {
            if (response && response.status_code === 34) {
                cbErr(response)
            } else {
                cbSuc(response, elm)
            }
        }
    }, error => {
        reject(error.message)
    })
}


export function errorHandler(err) {
    console.error('err => ', err);
}