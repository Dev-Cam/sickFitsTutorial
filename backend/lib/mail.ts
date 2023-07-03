import { createTransport, getTestMessageUrl } from 'nodemailer';
import 'dotenv/config';

const transport = createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
});

function makeANiceEmail(text: string): string {
	return `
  <div style="
  border: 1px solid black;
  padding: 20px;
  font-family: sans-serif;
  line-height: 2;
  font-size: 20px;
  ">
    <h2>Hello there!</h2>
    <p>${text}</p>
    <p>Cam</p>
  </div>
  `;
}

export async function sendPasswordEmail(resetToken: string, to: string) {
	// email the user a token
	const info = await transport.sendMail({
		to,
		from: 'test@example.com',
		subject: 'Your password reset token!',
		html: makeANiceEmail(`Your password Reset Token is Here!

    <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to Reset</a>
    `),
	});
	if (process.env.MAIL_USER.includes('ethereal.email')) {
		console.log(`Message Sent! Preview it at ${getTestMessageUrl(info)}`);
	}
}
