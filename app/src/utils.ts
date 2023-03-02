export function timer(seconds: number) {

    return new Promise((resolve, reject) => {
        setTimeout(function(err: any) {
            resolve(err)
        }, seconds * 1000)
    })
}