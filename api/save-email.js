import { google } from 'googleapis';

const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;
const GOOGLE_SHEET_ID = '18ObK-OYuV9gDfSllCZ-bSmXeZijWrkGx6X7u-zgiUT0';
const GOOGLE_SHEET_NAME = 'Quests for Valhalla - Early Access';

const sheets = google.sheets({ version: 'v4', auth: GOOGLE_SERVICE_ACCOUNT_EMAIL });

const saveEmail = async (email) => {
  const range = `${GOOGLE_SHEET_NAME}!A1:A`;
  const values = [[email]];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values,
      },
    });
  } catch (error) {
    console.error('Error saving email:', error);
    throw error;
  }
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      await saveEmail(email);
      res.status(200).json({ message: 'Email saved successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving email. Please try again.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
};
