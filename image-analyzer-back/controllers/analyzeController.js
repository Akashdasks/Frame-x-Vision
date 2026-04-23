const fs = require('fs');
const analyzeWithAI = require('../config/ai');

const analyzeImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided.' });
  }

  const filePath = req.file.path;

  try {
    const prompt = `You are an expert image analyst with deep knowledge of visual scenes, objects, people, and environments. Analyze this image thoroughly and respond with a valid JSON object only — no markdown, no code fences, just raw JSON.

The JSON must follow this exact structure:
{
  "scene_title": "A short, evocative 4-6 word title for the image",
  "description": "A rich 3-4 sentence description of what is happening in the scene, including atmosphere, mood, and context.",
  "people": {
    "count": 0,
    "details": [
      {
        "description": "Physical appearance description",
        "age_group": "Child/Teen/Young Adult/Adult/Elderly",
        "gender_presentation": "Male/Female/Unknown",
        "emotion": "Happy/Sad/Angry/Neutral/Surprised/Fearful",
        "action": "What this person is doing",
        "clothing": "Description of clothing"
      }
    ]
  },
  "objects": [
    { "name": "Object Name", "confidence": "High/Medium/Low", "category": "Category like Person/Animal/Vehicle/Nature/Food/Furniture/etc", "location": "Where in the image eg top-left, center, background" }
  ],
  "environment": {
    "setting": "Indoor/Outdoor/Unknown",
    "location_type": "eg Beach, Office, Street, Forest, Kitchen, Park",
    "time_of_day": "Day/Night/Golden Hour/Dawn/Dusk/Unknown",
    "weather": "Sunny/Cloudy/Rainy/Snowy/Foggy/Unknown",
    "season": "Spring/Summer/Autumn/Winter/Unknown"
  },
  "visual": {
    "dominant_colors": ["color1", "color2", "color3"],
    "mood": "One word mood eg Serene, Chaotic, Joyful, Tense, Romantic, Mysterious",
    "lighting": "Natural/Artificial/Mixed/Dark/Bright/Golden",
    "composition": "eg Portrait, Landscape, Close-up, Wide shot, Aerial"
  },
  "animals": [
    { "name": "Animal name", "action": "What it is doing", "confidence": "High/Medium/Low" }
  ],
  "text_in_image": ["any visible text, signs, labels found in the image"],
  "interesting_facts": ["One interesting observation about the image", "Another unique detail noticed"]
}

Be thorough, accurate, and detailed. If a category has no data, use empty array [] or null.`;

    const base64Image = fs.readFileSync(filePath).toString('base64');
    const text = await analyzeWithAI(base64Image, req.file.mimetype, prompt);

    const clean = text.replace(/```json|```/g, '').trim();
    const analysisData = JSON.parse(clean);

    res.json({ success: true, analysis: analysisData });
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'AI analysis failed. Try again.' });
  } finally {
    fs.unlink(filePath, () => {});
  }
};

module.exports = { analyzeImage };
