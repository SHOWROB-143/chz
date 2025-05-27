const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
My Owner info & Any Problem Contact :-

- নাম।         : সৌরভ খান

- বর্তমান ঠিকানা  : ঢাকা 

- স্থায়ী ঠিকানা    : ঢাকা

- বয়স          : ২৩+

- GENDER       : MALE

- উচ্চতা         : ৫ ফুট ৬ইঞ্চি

- জন্ম তারিখ     : ২৩ সেপ্টেম্বর ❌

- পেশা          : স্টুডেন্ট 

- যোগ্যতা        : অনার্স ৩য় বর্ষ 

- রিলেশন শিপ    : সিঙ্গেল 

- প্রিয় রং        : কালো ⚫😇

- প্রিয় খাবার      : বিরিয়ানি❤️❤️

- শখ            : নাই

- ইচ্ছা           : নাই

- আসল পরিচয়     : ইসলাম🌸🌺

Profile 1 Link :- https://www.facebook.com/its.showrob.bbz0

Profile 2 Link :- https://www.facebook.com/NOT.FOUND.THIS.LINK.SIR

★Facebook Page Link:-https://www.facebook.com/MR.TOM69K

WhatsApp       :- Personal

★Support Email:- Showrobkhan041@gmail.com

        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/Screenshot_20250527-230625.jpg"));
  
    return request(encodeURI(`https://graph.facebook.com/100000478146113/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/s.png'))
        .on('close', () => callback());
};
