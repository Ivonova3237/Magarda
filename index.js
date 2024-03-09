// password-strength-checker.js

class PasswordStrengthChecker {
    constructor() {
      this.lowercaseRegex = /[a-z]/;
      this.uppercaseRegex = /[A-Z]/;
      this.digitRegex = /\d/;
      this.specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
      this.minLength = 8;
    }
  
    checkStrength(password) {
      if (password.length < this.minLength) {
        return 'Weak: Password should be at least ' + this.minLength + ' characters long.';
      }
  
      let complexity = 0;
  
      if (this.lowercaseRegex.test(password)) {
        complexity++;
      }
  
      if (this.uppercaseRegex.test(password)) {
        complexity++;
      }
  
      if (this.digitRegex.test(password)) {
        complexity++;
      }
  
      if (this.specialCharRegex.test(password)) {
        complexity++;
      }
  
      switch (complexity) {
        case 1:
          return 'Weak: Password should include a mix of uppercase, lowercase, digits, and special characters.';
        case 2:
          return 'Moderate: Password could be stronger with a better mix of characters.';
        case 3:
          return 'Strong: Good job! Your password is strong.';
        case 4:
          return 'Very Strong: Excellent! Your password is very strong.';
        default:
          return 'Invalid Password';
      }
    }
  }
  
  module.exports = PasswordStrengthChecker;

