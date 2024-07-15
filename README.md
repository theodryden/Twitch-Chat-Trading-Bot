**Twitch Chat Trading Bot README**
This is a full-stack application created by Theo Dryden to generate excitement around financial education by creating the opportunity to discuss assets/investing on live social media platforms (Twitch) using REAL-TIME trading algorithms.

Trading account starts with $100,000. Participants discuss their stock investment ideas before placing a trade in the chat of https://www.twitch.tv/theodrydentech
Trades are placed by typing "!trade direction stock quantity" in Twitch chat : e.g. "!trade buy AAPL 100" / "!trade sell AAPL 100"
Participants can see the portfolio performance of the trading account by visiting the website: socialstocktrader.vercel.app
Orders placed outside of market hours will be fulfilled later on.

Access the live app link here: socialstocktrader.vercel.app

**Tech Stack**
**Font-End**
React.JS
Next.JS
JavaScript
Hosting on Vercel

**Back-End**
Node.JS
MySQL
Hosting on AWS

**Process Summary**
1. Bullet pointed feature requirements
2. Determined file and folder structure
3. Created a basic design of the pages using Figma
4. ![Screenshot 2024-07-15 at 09 43 09](https://github.com/user-attachments/assets/a068e13f-ce2c-4cea-ada7-23c7bb797113)

5. Started programming the bot.js for twitch
6. Programmed the front end
7. Testing and tweaks
8. Launched on Vercel and AWS
9. Promoted on LinkedIn and Instagram

**Challenges**
- The API Keys displaying as undefined using the env variables. 
- Understanding the ALPACA financial Market lingo
- Originally wanted an Instagram Comment Bot but had META Account difficulties, leading to Twitch Bot instead 

**Learnings**
- Uploading files to my AWS instance using SSH
- Usage of environment variables 
- Next.JS API file/folder structure
- Splitting the project into two parts instead of one whole
- Ensuring the bot.js script was running on the server when I didn't have the terminal open by using pm2 process manager.
![Screenshot 2024-07-15 at 22 09 18](https://github.com/user-attachments/assets/b3fc0168-fdca-43b4-8b3a-038ce3fa547e)

**Overall Experience**
This a great project to challenge my understanding of Next.JS/React file/folder structure and components. It was also a good attempt at creating something with the purpose of solving a realworld problem.

**Future Improvements**
- Creating a homepage to better present the application
- Creating a user login system with Clerk Auth
- Update the navigation bar design from top to side bar
  
**Social Channels**

**LinkedIN**
https://www.linkedin.com/in/theo-dryden-bb6526114/

**Youtube Channel**
https://www.youtube.com/channel/UCd7TxJrTbBP4e_tQULCyTnA

**Codecademy**
https://www.codecademy.com/users/TheoDryden/achievements

**Github**
https://github.com/theodryden

