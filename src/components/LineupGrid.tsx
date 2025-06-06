import React, { useState } from "react";
import { timeToMinutes } from "../assets/dummyData";
import type { Act } from "../assets/dummyData";

export interface Stage {
  stage: string;
  performances: Act[];
}

export type LineupGridProps = {
  acts?: Array<Act | Stage>;
};

const startTime = timeToMinutes("10:00");
const endTime = timeToMinutes("23:45");
const totalMinutes = endTime - startTime;

export default function LineupGrid({ acts = [] }: LineupGridProps) {
  const stagesMap: Record<string, Act[]> = {};
  const uniqueStages: string[] = [];

  if (acts.length && "artist" in (acts[0] as Act)) {
    (acts as Act[]).forEach((act) => {
      if (!stagesMap[act.stage]) {
        stagesMap[act.stage] = [];
        uniqueStages.push(act.stage);
      }
      stagesMap[act.stage].push(act);
    });
  } else {
    (acts as Stage[]).forEach((stage) => {
      if (!stagesMap[stage.stage]) {
        stagesMap[stage.stage] = [];
        uniqueStages.push(stage.stage);
      }
      if (Array.isArray(stage.performances)) {
        stagesMap[stage.stage].push(...stage.performances);
      }
    });
  }

  const [hearted, setHearted] = useState<Record<string, boolean>>({});
  const [infoOpen, setInfoOpen] = useState<Record<string, boolean>>({});

  const toggleHeart = (key: string) =>
    setHearted((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  const toggleInfo = (key: string) =>
    setInfoOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  return (
    <div className="overflow-auto w-full h-full border rounded bg-white">
      <div
        className="min-w-[1500px] relative grid"
        style={{ gridTemplateColumns: "100px repeat(56,1fr)" }}
      >
        <div
          className="sticky top-0 bg-white z-10 border-b border-r"
          style={{ gridColumn: 1, gridRow: 1 }}
        ></div>
        {Array.from({ length: 56 }, (_, i) => {
          const hour = 10 + Math.floor(i / 4);
          const minute = (i % 4) * 15;
          const label = `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`;
          return (
            <div
              key={i}
              className="text-xs text-center border-r border-b h-8 sticky top-0 z-10"
              style={{ gridColumn: i + 2, gridRow: 1 }}
            >
              {label}
            </div>
          );
        })}

        {uniqueStages.map((stageName, stageIdx) => {
          const row = stageIdx + 2;
          return (
            <React.Fragment key={stageName}>
              <div
                className="border-b border-r flex items-center justify-end pr-2"
                style={{ gridColumn: 1, gridRow: row }}
              >
                {stageName}
              </div>
              {Array.from({ length: 56 }, (_, i) => (
                <div
                  key={i}
                  className="border-b border-r h-12"
                  style={{ gridColumn: i + 2, gridRow: row }}
                ></div>
              ))}
            </React.Fragment>
          );
        })}

        {uniqueStages.flatMap((stageName, stageIdx) =>
          stagesMap[stageName].map((act, index) => {
            const start = timeToMinutes(act.start);
            const end = timeToMinutes(act.end);
            const colStart =
              Math.floor(((start - startTime) / totalMinutes) * 56) + 2;
            const colEnd =
              Math.ceil(((end - startTime) / totalMinutes) * 56) + 2;
            const row = stageIdx + 2;
            const key =
              stageName +
              "-" +
              (act.artist || index) +
              "-" +
              index;

            return (
              <React.Fragment key={key}>
                <div
                  className="bg-blue-500 text-white text-sm flex items-center justify-center gap-2 rounded border-2 border-black"
                  style={{
                    gridColumn: `${colStart} / ${colEnd}`,
                    gridRow: row,
                    zIndex: 30,
                    margin: "2px 0",
                  }}
                >
                  <span>{act.artist}</span>
                  <button
                    onClick={() => toggleHeart(key)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.2em",
                      lineHeight: 1,
                    }}
                    aria-label="Toggle favorite"
                    tabIndex={0}
                  >
                    {hearted[key] ? "❤️" : "🤍"}
                  </button>
                  <button
                    onClick={() => toggleInfo(key)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.2em",
                      lineHeight: 1,
                    }}
                    aria-label="Meer info"
                    tabIndex={0}
                  >
                    ℹ️
                  </button>
                </div>
                {infoOpen[key] && (
                  <div
                    className="bg-white text-black text-xs border border-blue-500 rounded shadow p-2 absolute w-72"
                    style={{
                      gridColumn: `${colStart} / ${colEnd}`,
                      gridRow: row + 1,
                      zIndex: 40,
                    }}
                  >
                    <div>
                      <b>Artiest:</b> {act.artist}
                    </div>
                    <div>
                      <b>Tijd:</b> {act.start} - {act.end}
                    </div>
                    {act.description && (
                      <div className="mt-2">
                        <b>Beschrijving:</b> {act.description}
                      </div>
                    )}
                    {act.image && (
                      <div className="mt-2">
                        <img
                          src={act.image}
                          alt={act.artist}
                          className="w-full h-32 object-cover rounded"
                        />
                      </div>
                    )}
                    {act.video && (
                      <div className="mt-2">
                        <video
                          src={act.video}
                          controls
                          className="w-full h-32 rounded"
                        />
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
}
