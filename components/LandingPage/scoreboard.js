import { useEffect, useState } from "react"

export default function Rajan() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    const teams = ["Mirabilis", "Grex", "Meraki", "Lucidus"]

   const events = [
  { name: "Carroms (Men)", scores: [0, 5, 3, 0] },
  { name: "Carroms (Women)", scores: [0, 5, 3, 0] },

  { name: "Volleyball (Men)", scores: [0, 5, 0, 10] },

  { name: "Handball (Women)", scores: [0, 5, 10, 0] },

  { name: "Shot Put (Men)", scores: [0, 4, 0, 5] },
  { name: "Shot Put (Women)", scores: [0, 1, 8, 0] },

  { name: "Javelin Throw (Men)", scores: [0, 0, 3, 6] },
  { name: "Javelin Throw (Women)", scores: [3, 0, 6, 0] },

  { name: "Discus Throw (Men)", scores: [0, 1, 5, 3] },
  { name: "Discus Throw (Women)", scores: [1, 0, 0, 8] },

  { name: "Long Jump (Men)", scores: [0, 0, 5, 4] },
  { name: "Long Jump (Women)", scores: [6, 0, 3, 0] },

  { name: "100 M Race (Men)", scores: [5, 0, 4, 0] },
  { name: "100 M Race (Women)", scores: [0, 1, 8, 0] },

  { name: "200 M Race (Men)", scores: [0, 3, 0, 5] },
  { name: "200 M Race (Women)", scores: [3, 0, 0, 6] },

  { name: "800 M Race (Men)", scores: [1, 0, 8, 0] },
  { name: "800 M Race (Women)", scores: [0, 5, 3, 1] },

  { name: "1500 M Race (Men)", scores: [5, 3, 0, 9] },
  { name: "1500 M Race (Women)", scores: [5, 3, 0, 9] },

  { name: "4×100 M Relay (Men)", scores: [3, 0, 5, 10] },
  { name: "4×100 M Relay (Women)", scores: [0, 3, 5, 10] }
];


    const totals = [27, 41, 79, 77]

    /* CLEAN TEXT STYLES (NO EFFECTS) */

    const titleStyle = {
        fontFamily: "var(--kyivtype)",
        color: "rgba(235,230,208,0.7)",
        fontSize: "clamp(1.75rem, 4vw, 4.5rem)",
        textAlign: "center",
        marginBottom: "2.5rem"
    }

    const subtitleStyle = {
        fontStyle: "oblique",
        color: "rgba(235,230,208,0.6)"
    }

    const headerText = {
        color: "rgba(235,230,208,0.6)",
        textTransform: "uppercase",
        letterSpacing: "1px"
    }

    const rowText = {
        color: "rgba(235,230,208,0.85)",
        letterSpacing: "0.4px"
    }

    const totalText = {
        color: "rgba(235,230,208,0.9)"
    }

    return (
        <main
            style={{
                minHeight: "100vh",
                background: "black",
                padding: isMobile ? "1.5rem" : "3rem"
            }}
        >

            {/* Title */}
            <h1 style={titleStyle}>
                Arts & Sports Meet
                <br />
                <span style={subtitleStyle}>
                    Live Scoreboard
                </span>
            </h1>

            {/* DESKTOP / TABLET */}
            {!isMobile && (
                <>
                    {/* Header */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr repeat(4, 1fr)",
                            borderBottom: "1px solid rgba(235,230,208,0.3)",
                            paddingBottom: "0.7rem"
                        }}
                    >
                        <div style={headerText}>Event</div>
                        {teams.map((t, i) => (
                            <div key={i} style={{ ...headerText, textAlign: "center" }}>
                                {t}
                            </div>
                        ))}
                    </div>

                    {/* Rows */}
                    {events.map((event, i) => (
                        <div
                            key={i}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "2fr repeat(4, 1fr)",
                                padding: "0.6rem 0"
                            }}
                        >
                            <div style={rowText}>{event.name}</div>
                            {event.scores.map((s, j) => (
                                <div key={j} style={{ ...rowText, textAlign: "center" }}>
                                    {s}
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Totals */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr repeat(4, 1fr)",
                            marginTop: "2rem",
                            paddingTop: "1rem",
                            fontSize: "1.6rem",
                            fontWeight: "bold",
                            borderTop: "1px solid rgba(235,230,208,0.3)"
                        }}
                    >
                        <div style={totalText}>Total</div>
                        {totals.map((t, i) => (
                            <div key={i} style={{ ...totalText, textAlign: "center" }}>
                                {t}
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* MOBILE */}
            {isMobile && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {events.map((event, i) => (
                        <div
                            key={i}
                            style={{
                                border: "1px solid rgba(235,230,208,0.25)",
                                padding: "1rem",
                                borderRadius: "10px"
                            }}
                        >
                            <div style={{ ...totalText, fontSize: "1.2rem", marginBottom: "0.6rem" }}>
                                {event.name}
                            </div>

                            {event.scores.map((score, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        ...rowText
                                    }}
                                >
                                    <span>{teams[idx]}</span>
                                    <span>{score}</span>
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Totals */}
                    <div
                        style={{
                            marginTop: "2rem",
                            padding: "1.2rem",
                            border: "1px solid rgba(235,230,208,0.3)",
                            borderRadius: "10px",
                            fontSize: "1.4rem",
                            fontWeight: "bold"
                        }}
                    >
                        {teams.map((team, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    ...totalText
                                }}
                            >
                                <span>{team}</span>
                                <span>{totals[i]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </main>
    )
}
