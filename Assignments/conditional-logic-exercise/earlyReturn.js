function checkTransactionNested(accountId, amount) {
  if (accountId !== null) {
    if (amount >= 0) {
      if (amount <= 10000) {
        return "Valid: " + accountId + " for $" + amount;
      } else {
        return "Error: Amount exceeds limit";
      }
    } else {
      return "Error: Negative amount";
    }
  } else {
    return "Error: No account ID";
  }
}

//**Part B - Rewrite using early return (guard clauses):**
function checkTransactionNested(accountId, amount) {
  if (accountId === null) {
    return "Error: No account ID";
  }
  if (amount < 0) {
    return "Error: Negative amount";
  }
  if (amount > 10000) {
    return "Error: Amount exceeds limit";
  }
  return "Valid: " + accountId + " for $" + amount;
}

console.log(checkTransactionNested(null, 300));
console.log(checkTransactionNested("ACC-001", -50));
console.log(checkTransactionNested("ACC-001", 15000));
console.log(checkTransactionNested("ACC-001", 250));
