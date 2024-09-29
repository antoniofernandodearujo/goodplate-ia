# GoodPlate-IA 🍽️

GoodPlate-IA is a mobile application built with Expo that uses AI to analyze images of food plates, providing a breakdown of the percentage of different food groups (e.g., proteins, vegetables, carbs) present. This project is based on a tutorial by Rodrigo Gonçalves on YouTube, and it was developed to practice AI image analysis in mobile applications.

# 📱 Features
- 📊 Food Composition Analysis: Analyze your plate to see the percentage breakdown of various food groups.
- 📸 Image Recognition: AI-powered image recognition identifies different food items on your plate using the Clarifai API.
- 🍏 Nutritional Insights: Get information on the nutritional balance of your meals.

# 🚀 Getting Started
Prerequisites
Before you begin, ensure you have the following:

- Node.js installed.
- Expo CLI installed.
- A working Android Studio or Xcode environment for testing on a device or emulator.
- Clarifai API Key: You'll need an API key from Clarifai. Sign up on the Clarifai website and retrieve your API key.

# Installation

1. Clone the repository:
```bash
git clone https://github.com/antoniofernandodearujogoodplate-ia
cd goodplate-ia
```
2. Install dependencies:
```bash
npm install
```
3. Set up the Clarifai API key:
- Create a .env file in the project root and add your Clarifai API credentials:
```bash
EXPO_PUBLIC_API_USER_APP_ID=your_user_app_id
EXPO_PUBLIC_API_APP_ID=your_app_id
EXPO_PUBLIC_API_MODEL_ID=your_model_id
EXPO_PUBLIC_API_MODEL_VERSION_ID=your_model_version_id
```
4. Start the development server:
```bash
npx expo start
```
5. Run on a device or emulator:
- Scan the QR code with your phone (using the Expo Go app) for quick testing.
- Or run the app in an emulator using the Expo developer tools.

# 🖥️ Technologies Used

- Expo: For building and running the app.
- React Native: For creating a cross-platform mobile application.
- Clarifai API: For AI image recognition and food analysis.
- Axios: For handling API requests.

# 🤝 License
This project is licensed under the MIT License - see the LICENSE file for details.

# 📧 Contact
If you have any questions or issues, feel free to reach out:

- Email: afas@academico.ufpb.br
