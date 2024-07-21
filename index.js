function receivesAFunction(callback) {
    callback();
}
describe('receivesAFunction', function() {
    it('receives a function and calls it', function() {
        const callback = sinon.spy();
        receivesAFunction(callback);
        expect(callback).to.have.been.called;
    });
});


function returnsANamedFunction() {
    function myNamedFunction() {
        console.log("This is a named function!");
    }   
    return myNamedFunction;
}
const namedFunction = returnsANamedFunction();
namedFunction();



function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function!");
    };
}
const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction();