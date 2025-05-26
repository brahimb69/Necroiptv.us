"use client";

import { useMemo, useState } from "react";
import { FiSearch, FiTv } from "react-icons/fi";
import channelData from "../data/channels.json";

// Country flag mapping
const countryFlags = {
  US: "🇺🇸",
  CA: "🇨🇦",
  UK: "🇬🇧",
  AU: "🇦🇺",
  BR: "🇧🇷",
  CO: "🇨🇴",
  MX: "🇲🇽",
  AR: "🇦🇷",
  CL: "🇨🇱",
  JM: "🇯🇲",
  TT: "🇹🇹",
  BB: "🇧🇧",
  BS: "🇧🇸",
  HT: "🇭🇹",
  DO: "🇩🇴",
  CU: "🇨🇺",
  PR: "🇵🇷",
  AW: "🇦🇼",
  GD: "🇬🇩",
  LC: "🇱🇨",
  KN: "🇰🇳",
  VC: "🇻🇨",
  AG: "🇦🇬",
  EC: "🇪🇨",
  SV: "🇸🇻",
  PA: "🇵🇦",
  NO: "🇳🇴",
  DK: "🇩🇰",
  SE: "🇸🇪",
  FI: "🇫🇮",
  IS: "🇮🇸",
  NL: "🇳🇱",
  CH: "🇨🇭",
  ES: "🇪🇸",
  FR: "🇫🇷",
  BE: "🇧🇪",
  IT: "🇮🇹",
  HR: "🇭🇷",
  UA: "🇺🇦",
  PL: "🇵🇱",
  EE: "🇪🇪",
  TR: "🇹🇷",
  DE: "🇩🇪",
};

// Get flag for a region
const getRegionFlag = (region) => {
  // If the region has channels, use the first channel's country code
  if (region.channels && region.channels.length > 0) {
    const countryCode = region.channels[0].country;
    return countryFlags[countryCode] || "🌎";
  }
  return "🌎"; // Default global flag
};

export default function ChannelList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [expandedRegions, setExpandedRegions] = useState(new Set());

  // Get only regions with channels
  const availableRegions = useMemo(() => {
    return channelData.regions.filter((region) => region.channels.length > 0);
  }, []);

  // Filter channels based on search query and selected region
  const filteredData = useMemo(() => {
    return channelData.regions.filter((region) => {
      if (selectedRegion !== "all" && region.name !== selectedRegion) {
        return false;
      }

      if (!searchQuery) return region.channels.length > 0;

      const query = searchQuery.toLowerCase();
      return (
        region.name.toLowerCase().includes(query) ||
        region.channels.some(
          (channel) =>
            channel.name.toLowerCase().includes(query) ||
            channel.country.toLowerCase().includes(query)
        )
      );
    });
  }, [searchQuery, selectedRegion]);

  // Toggle region expansion
  const toggleRegion = (regionName) => {
    console.log("Toggling region:", regionName);
    setExpandedRegions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(regionName)) {
        console.log("Closing region:", regionName);
        newSet.delete(regionName);
      } else {
        console.log("Opening region:", regionName);
        newSet.add(regionName);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-muted to-background dark:from-secondary dark:to-background-dark border-b border-border/50 dark:border-border-dark/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 bg-[size:20px_20px] opacity-20" />

        <div className="relative container py-16">
          <h1 className="text-4xl font-bold text-foreground dark:text-foreground-dark mb-4">
            Necro IPTV Channel List - 25,000+ Live TV Channels
          </h1>
          <p className="text-lg text-muted-foreground dark:text-foreground-dark/70">
            Explore our comprehensive selection of 25,000+ live TV channels available on Necro IPTV. 
            Our premium IPTV service features channels from around the world covering entertainment, 
            sports, news, movies, documentaries, and international programming in HD & 4K quality. 
            This sample showcases our extensive lineup—contact our 24/7 Necro IPTV support team for 
            specific channel availability and recommendations!
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-foreground-dark/50" />
            <input
              type="text"
              placeholder="Search channels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50 text-foreground dark:text-foreground-dark placeholder:text-muted-foreground/50 dark:placeholder:text-foreground-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Region Select */}
          <div className="relative min-w-[200px]">
            <button
              onClick={() => setSelectedRegion("all")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50 text-foreground dark:text-foreground-dark hover:bg-muted dark:hover:bg-secondary transition-colors"
            >
              <span className="text-xl">🌎</span>
              <span>All Regions</span>
            </button>
          </div>
        </div>

        {/* Channel List Section */}
        <div className="space-y-4">
          {filteredData.map(
            (region) =>
              region.channels.length > 0 && (
                <div
                  key={region.name}
                  className="rounded-xl overflow-hidden bg-background/50 dark:bg-background-dark/50 border border-border/50 dark:border-border-dark/50"
                >
                  {/* Region Header - Clickable */}
                  <button
                    onClick={() => toggleRegion(region.name)}
                    className="w-full flex items-center justify-between p-4 hover:bg-muted/50 dark:hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{getRegionFlag(region)}</span>
                      <h2 className="text-xl font-bold text-foreground dark:text-foreground-dark">
                        {region.name}
                      </h2>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10">
                      <FiTv className="w-5 h-5 text-muted-foreground dark:text-foreground-dark/50" />
                    </div>
                  </button>

                  {/* Channels - Collapsible */}
                  {expandedRegions.has(region.name) && (
                    <div className="p-4 border-t border-border/50 dark:border-border-dark/50">
                      {/* Channel packages or groups */}
                      {region.name === "SWITZERLAND" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50">
                            <span className="text-2xl mb-2">🇨🇭</span>
                            <span className="font-bold">3+</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50">
                            <span className="text-2xl mb-2">🇨🇭</span>
                            <span className="font-bold">4+</span>
                          </div>
                        </div>
                      )}

                      {/* Regular channel list */}
                      {region.name !== "SWITZERLAND" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                          {region.channels.slice(0, 24).map((channel, index) => (
                            <div
                              key={`${region.name}-${channel.name}-${index}`}
                              className="flex flex-col items-center justify-center p-4 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50 hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
                            >
                              <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 mb-2">
                                <FiTv className="w-5 h-5 text-primary" />
                              </div>
                              <span className="text-center text-sm font-medium text-foreground dark:text-foreground-dark">
                                {channel.name}
                              </span>
                            </div>
                          ))}
                          {region.channels.length > 24 && (
                            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-muted/50 dark:bg-secondary/50 border border-border/50 dark:border-border-dark/50">
                              <span className="text-center text-sm font-medium text-foreground dark:text-foreground-dark">
                                +{region.channels.length - 24} more channels
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
          )}

          {/* No Results */}
          {filteredData.every((region) => region.channels.length === 0) && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground dark:text-foreground-dark/70">
                No channels found matching your search criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
