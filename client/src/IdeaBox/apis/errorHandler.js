
export const errorHandler = (location, { err }) => {
    let log = `
    ================================
    Find Error while calling Api
    At : ${location}
    Status : ${err.status}
    Message : ${err.message}
    Header: ${err.header}
    ================================
    `;
    console.log(log);
}