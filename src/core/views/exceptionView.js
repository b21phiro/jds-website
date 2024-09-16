export default (errorModel) => {
    return `
        <h1>${ errorModel.heading }</h1>
        <p>${ errorModel.message ?? "" }</p>
    `;
};