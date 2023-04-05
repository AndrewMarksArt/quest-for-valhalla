import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;
const GOOGLE_SHEET_ID = '18ObK-OYuV9gDfSllCZ-bSmXeZijWrkGx6X7u-zgiUT0';
const GOOGLE_SHEET_NAME = 'Quests for Valhalla - Early Access';

const jwtClient = new google.auth.JWT(
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  ['https://www.googleapis.com/auth/spreadsheets']
);

const saveEmail = async (email) => {
  try {
    const googleSheets = google.sheets({ version: 'v4', auth: jwtClient });
    const request = {
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${GOOGLE_SHEET_NAME}!A1:A`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[email]],
      },
    };
    const response = await googleSheets.spreadsheets.values.append(request);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error saving email:', error);
    throw error;
  }
};

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      await jwtClient.authorize();
      const { email } = req.body;
      const savedEmail = await saveEmail(email);
      res.status(200).json(savedEmail);
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'Error submitting form', details: error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
