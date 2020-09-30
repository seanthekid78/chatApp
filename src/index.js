import React from "react"
import ReactDOM from "react-dom"
import ChatBot from 'react-simple-chatbot';


//
// const element = <ChatBot
//   steps={[
//     {
//       id: '1',
//       message: 'Hello and welcome to HR Simple! What is your name?',
//       trigger: '2',
//     },
//     {
//       id: '2',
//       user: true,
//       trigger: '3',
//     },
//     {
//       id: '3',
//       message: 'Hi {previousValue}, nice to meet you!',
//       trigger: '4',
//     },
//     {
//       id: '4',
//       message: 'We are now offering a free weekly HR related newsletter, would you like to learn more?',
//       trigger: '5',
//     },
//     {
//       id: '5',
//       user: true,
//       trigger: '6',
//     },
//     {
//       id: '6',
//       message: 'Our newsletter, the HR Update keeps our subscribers informed on current events and best practices in the HR world… if you would like to sign up, please respond with your email address.',
//       trigger: '7',
//     },
//     {
//       id: '7',
//       user: true,
//       trigger: '8',
//     },
//     {
//       id: '8',
//       message: 'The email {previousValue}, has been added to the HR Update mailing list!',
//       trigger: '9',
//     },
//     {
//       id: '9',
//       message: 'Have a great day!',
//       end: true,
//     },
//   ]}
// />
//
// ReactDOM.render(element, document.getElementById("root"))


class Test extends React.Component {
  render() {
    return <div>
    <h4>The bot is very limited in its capabilities. It can only return the result it was programmed to in the order it was programmed. It does not understand what you are saying and cannot act based on your input, it’s most advanced capability is storage of data, which is still pretty useful. We aren’t limited to this level of complexity though, bots built on machine learning algorithms have the ability to process text information (understand) and make decisions on the most appropriate answer (act). Giving users a more enjoyable and meaningful experience.
</h4>
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Hello and welcome to HR Simple! What is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you!',
          trigger: '4',
        },
        {
          id: '4',
          message: 'We are now offering a free weekly HR related newsletter, would you like to learn more?',
          trigger: '5',
        },
        {
          id: '5',
          user: true,
          trigger: '6',
        },
        {
          id: '6',
          message: 'Our newsletter, the HR Update keeps our subscribers informed on current events and best practices in the world of HR… if you would like to sign up, please respond with your email address.',
          trigger: '7',
        },
        {
          id: '7',
          user: true,
          trigger: '8',
        },
        {
          id: '8',
          message: 'The email {previousValue}, has been added to the HR Update mailing list!',
          trigger: '9',
        },
        {
          id: '9',
          message: 'Have a great day!',
          end: true,
        },
      ]}
    />
    </div>;
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
