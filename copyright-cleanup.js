#!/usr/bin/env node

// Copyright cleanup script for Necro IPTV
// This script replaces copyrighted channel/network names with generic alternatives

const fs = require('fs');
const path = require('path');

// Mapping of copyrighted names to generic alternatives
const replacements = {
  // Major US Networks
  'ABC': 'Network A',
  'NBC': 'Network B', 
  'CBS': 'Network C',
  'FOX': 'Network D',
  'Fox': 'Network D',
  
  // Premium Channels
  'HBO': 'Premium Movie Channel',
  'HBO 2': 'Premium Movie Channel 2',
  'HBO Comedy': 'Premium Comedy Channel',
  'HBO Family': 'Premium Family Channel',
  'HBO Latino': 'Premium Latino Channel',
  'HBO Signature': 'Premium Signature Channel',
  'HBO Zone': 'Premium Zone Channel',
  'Showtime': 'Premium Entertainment',
  'Showtime 2': 'Premium Entertainment 2',
  'Showtime Extreme': 'Premium Entertainment Extreme',
  'Showtime Showcase': 'Premium Entertainment Showcase',
  'Starz': 'Premium Movies',
  'Starz Cinema': 'Premium Movies Cinema',
  'Starz Comedy': 'Premium Movies Comedy',
  'Starz Edge': 'Premium Movies Edge',
  'Starz Encore': 'Premium Movies Encore',
  'Starz Encore Action': 'Premium Movies Action',
  'Starz Encore Black': 'Premium Movies Black',
  'Starz Encore Classic': 'Premium Movies Classic',
  'Starz Encore Family': 'Premium Movies Family',
  'Starz Encore Suspense': 'Premium Movies Suspense',
  'Starz Encore Westerns': 'Premium Movies Westerns',
  'Starz in Black': 'Premium Movies in Black',
  'Starz Kids & Family': 'Premium Kids & Family',
  
  // News Networks
  'CNN': 'News Network A',
  'Fox News': 'News Network D',
  'Fox Business': 'Business Network D',
  'MSNBC': 'News Network B',
  'HLN': 'Headline News',
  'CNBC': 'Business Network C',
  'Bloomberg': 'Financial News',
  'BNN Bloomberg': 'Financial News Canada',
  
  // Sports Networks
  'ESPN': 'Sports Network A',
  'ESPN2': 'Sports Network A2',
  'ESPNU': 'University Sports',
  'ESPNews': 'Sports News Network',
  'Fox Sports 1': 'Sports Network D1',
  'Fox Sports 2': 'Sports Network D2',
  'NBC Sports Network': 'Sports Network B',
  'CBS Sports Network': 'Sports Network C',
  'NFL Network': 'Professional Football Network',
  'NBA TV': 'Professional Basketball TV',
  'MLB Network': 'Professional Baseball Network',
  'NHL Network': 'Professional Hockey Network',
  'Golf Channel': 'Golf Network',
  'Tennis Channel': 'Tennis Network',
  'TSN': 'Sports Network CA',
  'TSN2': 'Sports Network CA2',
  'Sportsnet': 'Canadian Sports Network',
  'Sportsnet One': 'Canadian Sports Network One',
  'Sportsnet 360': 'Canadian Sports Network 360',
  'Sportsnet World': 'Canadian Sports Network World',
  'Sportsnet Now': 'Canadian Sports Network Now',
  'RDS': 'French Sports Network',
  'RDS2': 'French Sports Network 2',
  'TVA Sports': 'Quebec Sports Network',
  
  // Kids/Family Channels
  'Disney Channel': 'Kids Entertainment Channel',
  'Disney Junior': 'Preschool Channel',
  'Disney XD': 'Kids Action Channel',
  'Nickelodeon': 'Kids Network A',
  'Nick Jr.': 'Preschool Network A',
  'Nicktoons': 'Animation Network A',
  'Cartoon Network': 'Animation Network B',
  'Boomerang': 'Classic Animation',
  'PBS Kids': 'Educational Kids',
  'CBBC': 'Kids Channel UK',
  'CBeebies': 'Preschool UK',
  'YTV': 'Youth Network',
  'Treehouse TV': 'Preschool Canada',
  'Teletoon': 'Animation Canada',
  'Family Channel': 'Family Network Canada',
  'Family Jr.': 'Family Junior Canada',
  'Family CHRGD': 'Family Action Canada',
  
  // BBC Channels
  'BBC One': 'Public Broadcaster One',
  'BBC Two': 'Public Broadcaster Two', 
  'BBC Three': 'Public Broadcaster Three',
  'BBC Four': 'Public Broadcaster Four',
  'BBC News': 'Public News Network',
  'BBC Parliament': 'Public Parliament Channel',
  'BBC Alba': 'Public Scottish Channel',
  'BBC America': 'British Network America',
  'BBC Canada': 'British Network Canada',
  'BBC World News': 'International News Network',
  'BBC Earth': 'Nature Documentary Channel',
  'BBC Kids': 'Educational Kids UK',
  
  // ITV Channels  
  'ITV': 'Commercial Network UK',
  'ITV2': 'Commercial Network UK 2',
  'ITV3': 'Commercial Network UK 3', 
  'ITV4': 'Commercial Network UK 4',
  'ITVBe': 'Lifestyle Network UK',
  'ITV Encore': 'Drama Network UK',
  
  // Channel 4 Family
  'Channel 4': 'Alternative Network UK',
  'E4': 'Entertainment Network UK',
  'More4': 'Documentary Network UK',
  'Film4': 'Movie Network UK',
  '4seven': 'Catch-up Network UK',
  
  // Channel 5 Family
  'Channel 5': 'Commercial Five UK',
  '5USA': 'US Entertainment UK',
  '5Star': 'Reality Network UK',
  '5Select': 'Factual Network UK',
  'My5': 'On-demand Five UK',
  
  // Sky Channels
  'Sky One': 'Satellite Entertainment',
  'Sky Two': 'Satellite Entertainment 2',
  'Sky Arts': 'Arts & Culture Channel',
  'Sky Atlantic': 'Premium Drama Channel',
  'Sky Witness': 'Crime & Drama Channel',
  'Sky Crime': 'True Crime Channel',
  'Sky Comedy': 'Comedy Network',
  'Sky Documentaries': 'Documentary Channel',
  'Sky Nature': 'Nature Channel',
  'Sky History': 'History Channel',
  'Sky History 2': 'History Channel 2',
  'Sky News': 'Satellite News',
  'Sky Sports': 'Premium Sports Network',
  
  // Canadian Networks
  'CBC': 'Canadian Public Broadcaster',
  'CBC News Network': 'Canadian Public News',
  'CBC Gem': 'Canadian Public Streaming',
  'CTV': 'Canadian Television Network',
  'CTV 2': 'Canadian Television Network 2',
  'CTV News Channel': 'Canadian Television News',
  'Global': 'Canadian Global Network',
  'Global News': 'Canadian Global News',
  'Citytv': 'Canadian City Network',
  'TVA': 'Quebec Television Network',
  'V': 'Quebec Entertainment Network',
  'Télé-Québec': 'Quebec Public Network',
  'Radio-Canada': 'French Canadian Public',
  'Noovo': 'Canadian Lifestyle Network',
  'Knowledge Network': 'Educational Network BC',
  'CP24': 'Toronto News Network',
  
  // Lifestyle/Entertainment
  'Bravo': 'Lifestyle Network A',
  'Bravo Canada': 'Lifestyle Network Canada',
  'E!': 'Entertainment News Network',
  'E! Canada': 'Entertainment News Canada',
  'TLC': 'Learning Channel',
  'Lifetime': 'Women\'s Network',
  'Lifetime Canada': 'Women\'s Network Canada',
  'OWN': 'Oprah\'s Network',
  'Oxygen': 'Crime & Investigation A',
  'A&E': 'Arts & Entertainment Network',
  'AMC': 'Movie Classics Network',
  'FX': 'Premium Cable Network',
  'FXX': 'Comedy Cable Network',
  'USA Network': 'General Entertainment Network',
  
  // Discovery Family
  'Discovery Channel': 'Science & Nature Network',
  'Discovery Science': 'Science Network',
  'Animal Planet': 'Wildlife Network',
  'National Geographic': 'Geographic Channel',
  'Nat Geo Wild': 'Wildlife Geographic',
  'Science Channel': 'Science Learning Network',
  'Investigation Discovery': 'True Crime Investigation',
  
  // Food/Home Networks
  'Food Network': 'Cooking Network',
  'Food Network Canada': 'Cooking Network Canada',
  'Cooking Channel': 'Culinary Network',
  'HGTV': 'Home & Garden Network',
  'HGTV Canada': 'Home & Garden Canada',
  'DIY Network': 'Do It Yourself Network',
  'DIY Network Canada': 'Do It Yourself Canada',
  
  // Music Networks
  'MTV': 'Music Television',
  'MTV2': 'Music Television 2',
  'MTV Canada': 'Music Television Canada',
  'MTV2 Canada': 'Music Television 2 Canada',
  'VH1': 'Video Hits Network',
  'CMT': 'Country Music Television',
  'CMT Canada': 'Country Music Canada',
  'Much': 'Music Network Canada',
  
  // History/Documentary
  'History Channel': 'Historical Network',
  'History': 'Historical Network',
  'Biography Channel': 'Biography Network',
  'Military Channel': 'Military Network',
  'Smithsonian Channel': 'Educational History',
  
  // International/Premium Services
  'Netflix': 'Streaming Service A',
  'beIN Sports': 'International Sports Network',
  'DAZN': 'Sports Streaming Service',
  'WWE Network': 'Wrestling Entertainment Network',
  'Paramount Network': 'Entertainment Network P',
  'Paramount Network Canada': 'Entertainment Network P Canada',
  
  // Religious/Special Interest
  'VisionTV': 'Multi-faith Network',
  'TBN': 'Religious Network',
  'EWTN': 'Catholic Network',
  
  // Shopping
  'QVC': 'Shopping Network A',
  'HSN': 'Shopping Network B',
  'Shopping Channel': 'Canadian Shopping Network',
  
  // Weather
  'The Weather Channel': 'Weather Network',
  'Weather Network': 'Canadian Weather Channel',
  
  // General Entertainment  
  'TBS': 'Comedy Network B',
  'TNT': 'Drama Network',
  'truTV': 'Reality Comedy Network',
  'Spike': 'Men\'s Network',
  'Viceland': 'Youth Culture Network',
  'Pop': 'Pop Culture Network',
  'Sundance TV': 'Independent Film Network',
  'IFC': 'Independent Film Channel',
  'IFC Canada': 'Independent Film Canada',
  'TCM': 'Classic Movies Network',
  'Turner Classic Movies (TCM)': 'Classic Movies Network',
  
  // Travel/Lifestyle
  'Travel Channel': 'Travel & Adventure',
  'HGTV': 'Home & Garden Network',
  'Hallmark Channel': 'Family Movies Network',
  'Lifetime Movie Network': 'Women\'s Movies Network',
  'Reelz': 'Entertainment News & Movies',
  
  // Canadian Premium
  'Super Channel': 'Canadian Premium Movies',
  'Super Écran': 'French Premium Movies',
  'Movie Network': 'Canadian Movie Network',
  'HBO Canada': 'Premium Movies Canada',
  'Crave': 'Canadian Streaming Service',
  'Crave 1': 'Canadian Streaming Service 1',
  'Crave 2': 'Canadian Streaming Service 2',
  'Crave 3': 'Canadian Streaming Service 3',
  'Crave 4': 'Canadian Streaming Service 4',
  'Starz Canada': 'Premium Movies Canada',
  'Hollywood Suite': 'Movie Collection Network',
  
  // Specialty Canadian
  'Showcase': 'Canadian Drama Network',
  'Slice': 'Canadian Lifestyle Network',
  'W Network': 'Canadian Women\'s Network',
  'OLN': 'Outdoor Life Network',
  'Cottage Life': 'Rural Lifestyle Network',
  'Silver Screen Classics': 'Classic Film Network',
  'Peachtree TV': 'Southern Entertainment',
  'Zoomer TV': 'Mature Audience Network',
  'Telelatino': 'Latin Canadian Network',
  
  // Government/Public Affairs
  'CPAC': 'Canadian Parliament Channel',
  'CSPAN': 'Public Affairs Network',
  'CSPAN2': 'Public Affairs Network 2',
  'CSPAN3': 'Public Affairs Network 3'
};

// Function to replace text in a file
function replaceInFile(filePath, replacements) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Sort replacements by length (longest first) to avoid partial replacements
    const sortedReplacements = Object.entries(replacements)
      .sort(([a], [b]) => b.length - a.length);
    
    sortedReplacements.forEach(([original, replacement]) => {
      // Use word boundaries to avoid partial matches
      const regex = new RegExp(`\\b${original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, replacement);
        modified = true;
        console.log(`  Replaced "${original}" with "${replacement}"`);
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${filePath}`);
    } else {
      console.log(`- No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}: ${error.message}`);
  }
}

// Files to process
const filesToProcess = [
  './frontend/channels.json',
  './frontend/app/data/channels.json',
  './frontend/services/blog.service.js'
];

console.log('🧹 Starting copyright cleanup...\n');

filesToProcess.forEach(file => {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    console.log(`Processing: ${file}`);
    replaceInFile(fullPath, replacements);
    console.log('');
  } else {
    console.log(`⚠️  File not found: ${file}\n`);
  }
});

console.log('✅ Copyright cleanup completed!');
