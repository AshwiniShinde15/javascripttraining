let responseCode = 51;
switch (responseCode) {
  case 0:
    // "Approved - transaction successful"
    break;
  case 8:
    // "Approved - ID verification required"
    break;
  case 5:
  case 51:
  case 61:
    // Group these: "Declined - insufficient funds or over limit"
    // (5, 51, and 61 all print the same message - intentional fall-through)
    break;
  case 54:
    // "Declined - expired card"
    break;
  case 91:
  case 96:
  case 99:
    // Group these: "System error - try again later"
    break;
  default:
  // "Unknown response code: " + responseCode
}
