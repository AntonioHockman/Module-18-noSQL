const names = [
'naomi','malachi','yesena', 'felix','tony','scott','douglas','tyler','brandon','danielle',
  ];
  
  const thoughtTexts = [
    'My first thought !', 'I am learning to program', 'working on my coding now', 'i am in a vanderbilt bootcamp', ]
  
  const emails = [
    'example.com', 'mail.com', 'yahoo.com', 'gmail.com', 'hotmail.com'
  ];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  const getRandomEmail = (name) => `${name.split(' ').join('.').toLowerCase()}@${getRandomArrItem(emails)}`;
  
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtTexts),
        username: getRandomName().split(' ')[0],
        reactions: getRandomReactions(3),
      });
    }
    return results;
  };
  
  const getRandomReactions = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(thoughtTexts),
        username: getRandomName().split(' ')[0],
      });
    }
    return results;
  };
  
  module.exports = { getRandomName, getRandomEmail, getRandomThoughts };
  