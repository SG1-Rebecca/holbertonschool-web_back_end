function displayMessage(message) {
  try {
    console.log(message);
  } catch (error) {
    throw new Error('Error occurred while displaying message');
  }
}

module.exports = displayMessage;
