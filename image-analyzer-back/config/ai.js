const axios = require('axios');
require('dotenv').config();

const analyzeWithAI = async (base64Image, mimeType, prompt) => {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openrouter/auto',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              {
                type: 'image_url',
                image_url: { url: `data:${mimeType};base64,${base64Image}` },
              },
            ],
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:5173',
          'X-Title': 'Image Analyzer',
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (err) {
    console.log('Status:', err.response?.status);
    console.log('Error details:', JSON.stringify(err.response?.data, null, 2));
    throw err;
  }
};

module.exports = analyzeWithAI;
