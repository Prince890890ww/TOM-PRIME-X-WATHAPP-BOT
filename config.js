/**
 * Global Configuration for TOM-PRIME-X WhatsApp Bot
 */

module.exports = {
    // Bot Bot + Owner Configuration
    ownerNumber: ['959666862579'], // Your Bot number without + or spaces
    ownerName: ['Prince Down'], 
    
    // Bot Configuration
    botName: 'Prince',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '', 
    newsletterJid: '120363408961680384@newsletter',
    updateZipUrl: 'https://github.com/tom-wathsapp-bot-x/TOM-PRIME-X-WATHAPP-BOT/archive/refs/heads/main.zip', 
    
    // Sticker Configuration
    packname: 'TOM-PRIME-X-MD',
    author: 'Professor Tom',
    
    // Bot Behavior
    selfMode: false, 
    autoRead: false,
    autoTyping: true, 
    autoBio: true, 
    autoSticker: false,
    autoReact: true, 
    autoReactMode: 'bot', 
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: true, 
      antilinkAction: 'kick', 
      antitag: false,
      antitagAction: 'delete',
      antiall: false, 
      antiviewonce: true, 
      antibot: true, 
      anticall: true, 
      antigroupmention: false, 
      antigroupmentionAction: 'delete', 
      welcome: true, 
      welcomeMessage: '_W3LLC0M3 H0 GY4 APK4 J4NU KHUSHBU L4G4 KE 🥹💋"_',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: true,
      antidelete: true, 
      nsfw: false,
      detect: true,
      chatbot: false,
      autosticker: false 
    },
    
    // API Keys
    apiKeys: {
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Processing... Please wait!',
      success: '✅ Task Completed!',
      error: '❌ System Error! Check Logs.',
      ownerOnly: '👑 This command is only for Professor Tom!',
      adminOnly: '🛡️ Admin access required!',
      groupOnly: '👥 Use this command in groups!',
      privateOnly: '💬 Use this command in DM!',
      botAdminNeeded: '🤖 Bot needs admin privileges!',
      invalidCommand: '❓ Unknown command! Type .menu'
    },
    
    // Timezone
    timezone: 'Asia/Dhaka', 
    
    // Limits
    maxWarnings: 3,
    
    // Social Links...!
    social: {
      github: 'https://github.com/TOM-PRIME-X-MINI-BOT/TOM-PRIME-X-WATHAPP-BOT',
      facebook: 'https://www.facebook.com/majidul.islam.zihad', // add tor link
      youtube: 'http://youtube.com/@saycotom'
    }
};
