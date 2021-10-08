"use strict";

GSUI.setTemplate( "popup-about", () => (
	GSUI.createElement( "div", { id: "aboutPopupContent", class: "popup" },
		GSUI.createElement( "div", { class: "title" },
			GSUI.createElement( "span", null, "GridSound" ),
			GSUI.createElement( "span", { id: "version" },
				GSUI.createElement( "span", { id: "versionNum" } ),
				GSUI.createElement( "i", { id: "versionIcon", class: "gsuiIcon" } ),
				GSUI.createElement( "span", { id: "versionCheck" }, "check the version" ),
			),
		),
		GSUI.createElement( "div", null,
			"GridSound is a ",
			GSUI.createElement( "b", null, "work-in-progress" ),
			" free browser-based digital audio workstation following the ",
			GSUI.createElement( "a", { target: "_blank", rel: "noopener", href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API" }, "Web Audio API" ),
			".",
		),
		GSUI.createElement( "div", null,
			"You can create an account (by clicking ", GSUI.createElement( "i", { class: "gsuiIcon", "data-icon": "profile" } ),
			") and start uploading your compositions online ", GSUI.createElement( "i", { class: "gsuiIcon", "data-icon": "cloud" } ),
		),
		GSUI.createElement( "div", { class: "social-network" },
			GSUI.createElement( "a", { target: "_blank", rel: "noopener", title: "GitHub",   class: "gsuiIcon gsuiIconB", "data-icon": "github",   href: "https://github.com/gridsound" } ),
			GSUI.createElement( "a", { target: "_blank", rel: "noopener", title: "Twitter",  class: "gsuiIcon gsuiIconB", "data-icon": "twitter",  href: "https://twitter.com/gridsound" } ),
			GSUI.createElement( "a", { target: "_blank", rel: "noopener", title: "YouTube",  class: "gsuiIcon gsuiIconB", "data-icon": "youtube",  href: "https://youtube.com/channel/UC2-jebT7TS8xJgJPymXqatA" } ),
			GSUI.createElement( "a", { target: "_blank", rel: "noopener", title: "Facebook", class: "gsuiIcon gsuiIconB", "data-icon": "facebook", href: "https://facebook.com/gridsound" } ),
			GSUI.createElement( "a", { target: "_blank", rel: "noopener", title: "CodePen",  class: "gsuiIcon gsuiIconB", "data-icon": "codepen",  href: "https://codepen.io/gridsound" } ),
			GSUI.createElement( "a", { target: "_blank", rel: "noopener", title: "Discord",  class: "gsuiIcon gsuiIconB", "data-icon": "discord",  href: "https://discord.gg/NUYxHAg" } ),
		),
	)
) );