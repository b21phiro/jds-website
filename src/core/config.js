const Config = {
    
    APP_TITLE: "JDS - Webbsida",

    DISCORD_LINK: "https://discord.gg/cJdDc4e2y9",
    LINKEDIN_LINK: "https://www.linkedin.com/company/junior-dev-sverige",
    INSTAGRAM_LINK: ""

};

const style = getComputedStyle(document.body);

const Color = {
    WHITE     : style.getPropertyValue('--color-white'),
    YELLOW    : style.getPropertyValue('--color-yellow'),
    SKY_BLUE  : style.getPropertyValue('--color-sky-blue'),
    RAINY_SKY : style.getPropertyValue('--color-rainy-sky'),
    NIGHT_SKY : style.getPropertyValue('--color-night-sky'),
    PURPLE    : style.getPropertyValue('--color-purple'),
    GRAPE     : style.getPropertyValue('--color-grape'),
    BLACK     : style.getPropertyValue('--color-black'),
    RED     : style.getPropertyValue('--color-red'),
    GREEN     : style.getPropertyValue('--color-green'),
    BLUE     : style.getPropertyValue('--color-blue'),
};

export { Config, Color }