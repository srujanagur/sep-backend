//Just to avoid try catch everywhere we use async
//We need try catch blocks for unhandled promise rejection
export default ( theFunc ) => ( req, res, next ) =>
{
	Promise.resolve(theFunc(req, res, next)).catch(next)
}