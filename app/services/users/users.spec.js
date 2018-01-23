// test suite
describe('Users factory', function() {
  //spec
  var Users;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('api.users'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  // A set of tests for our Users.all() method
  describe('.all()', function() {

    it('should exist', function() {
      expect(Users.all).toBeDefined();
    });

    it('should return a hard-coded list of users', function() {
      expect(Users.all()).toEqual(userList);
    });
  });
});
