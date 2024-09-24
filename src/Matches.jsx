import React from 'react';

const MatchCard = ({ tournamentName, daysToGo, homeTeam, awayTeam, matchDate, matchTime, matchPlace, matchType, matchInfoLink, homeTeamImg, awayTeamImg }) => (
  <div className="p-4 mb-6 bg-white rounded-lg shadow-lg card-main">
    <a href={matchInfoLink}>
      <div id="match-card" className="match-card">
        <div className="match-card-top">
          <h5 className="mb-2 text-lg font-bold text-gray-700 match-tournament-name">{tournamentName}</h5>
          <div className="text-gray-500 hrs">{daysToGo} days To Go</div>
        </div>
        <div className="flex items-center justify-between my-4 match-card-middle">
          <div className="flex items-center match-tm-info">
            <img className="w-12 h-12" src={homeTeamImg} alt="Home Team" />
            <div className="ml-2 text-gray-700 tm-name">{homeTeam}</div>
          </div>
          <div className="mx-2 small-separator">
            <img src="https://scores.bcci.tv/matchcentre/homewidgetv3/images/vs.png" alt="vs" className="w-8 h-8" />
          </div>
          <div className="flex items-center match-tm-info">
            <img className="w-12 h-12" src={awayTeamImg} alt="Away Team" />
            <div className="ml-2 text-gray-700 tm-name">{awayTeam}</div>
          </div>
        </div>
        <div className="mb-4 text-sm text-gray-600 match-info">
          <div className="match-dates">{matchDate}</div>
          <div className="match-time">{matchTime}</div>
        </div>
        <div className="flex items-center justify-between match-card-bottom">
          <div className="text-gray-600 match-place">{matchPlace}</div>
          <div className="px-4 py-2 text-white bg-blue-500 rounded-lg match-btn">Match Info</div>
        </div>
      </div>
      <div className="px-3 py-1 mt-4 text-xs text-white bg-gray-800 rounded-full match-card-type">{matchType}</div>
    </a>
  </div>
);

const MatchList = ({ matches }) => (
  <div className="p-4 space-y-4 match-slider">
    {matches.map((match, idx) => (
      <MatchCard
        key={idx}
        tournamentName={match.tournamentName}
        daysToGo={match.daysToGo}
        homeTeam={match.homeTeam}
        awayTeam={match.awayTeam}
        matchDate={match.matchDate}
        matchTime={match.matchTime}
        matchPlace={match.matchPlace}
        matchType={match.matchType}
        matchInfoLink={match.matchInfoLink}
        homeTeamImg={match.homeTeamImg}
        awayTeamImg={match.awayTeamImg}
      />
    ))}
  </div>
);

const matchesData = [
  {
    tournamentName: 'Bangladesh tour of India Test series 2024',
    daysToGo: '2',
    homeTeam: 'India',
    awayTeam: 'Bangladesh',
    matchDate: '27 Sep 2024',
    matchTime: '09:30 AM IST',
    matchPlace: 'Green Park, Kanpur',
    matchType: '2nd Test',
    matchInfoLink: 'https://www.bcci.tv/events/161/Bangladesh-tour-of-India-Test-series-2024/match/1566/2nd-Test',
    homeTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/india.png',
    awayTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/bng.png',
  },
  {
    tournamentName: 'T20 World Cup 2024',
    daysToGo: '5',
    homeTeam: 'Australia',
    awayTeam: 'New Zealand',
    matchDate: '30 Sep 2024',
    matchTime: '07:00 PM AEDT',
    matchPlace: 'Melbourne Cricket Ground',
    matchType: 'Super 8s',
    matchInfoLink: 'https://www.t20worldcup.com/matches/12345/australia-vs-new-zealand',
    homeTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/australia.png',
    awayTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/nz.png',
  },
  {
    tournamentName: 'Asia Cup 2024',
    daysToGo: '1',
    homeTeam: 'Pakistan',
    awayTeam: 'Sri Lanka',
    matchDate: '26 Sep 2024',
    matchTime: '02:30 PM PKT',
    matchPlace: 'Gaddafi Stadium, Lahore',
    matchType: 'Group Stage',
    matchInfoLink: 'https://www.asia-cup.com/matches/56789/pakistan-vs-sri-lanka',
    homeTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/pakistan.png',
    awayTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/sl.png',
  },
  {
    tournamentName: 'Caribbean Premier League 2024',
    daysToGo: '3',
    homeTeam: 'Trinidad and Tobago',
    awayTeam: 'Barbados',
    matchDate: '29 Sep 2024',
    matchTime: '04:00 PM AST',
    matchPlace: 'Queen’s Park Oval, Port of Spain',
    matchType: 'Group Stage',
    matchInfoLink: 'https://www.cplt20.com/matches/98765/trinidad-vs-barbados',
    homeTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/trinidad.png',
    awayTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/barbados.png',
  },
  {
    tournamentName: 'Indian Premier League 2024',
    daysToGo: '4',
    homeTeam: 'Chennai Super Kings',
    awayTeam: 'Delhi Capitals',
    matchDate: '28 Sep 2024',
    matchTime: '08:00 PM IST',
    matchPlace: 'MA Chidambaram Stadium, Chennai',
    matchType: 'League Match',
    matchInfoLink: 'https://www.iplt20.com/matches/54321/csk-vs-dc',
    homeTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/csk.png',
    awayTeamImg: 'https://scores.bcci.tv/matchcentre/teamlogos/dc.png',
  },
];

const MatchWidget = () => (
  <div className="p-6 bg-white rounded-lg shadow-lg match-sec-container">
    <div className="flex items-center justify-between mb-6 sec-head">
      <div className="text-xl font-bold section-title">Matches</div>
      <ul className="flex space-x-4 match-tab">
        <li className="nav-item">
          <a className="text-blue-500 cursor-pointer nav-link active">Fixtures</a>
        </li>
        <li className="nav-item">
          <a className="text-gray-500 cursor-pointer nav-link">Results</a>
        </li>
      </ul>
    </div>
    <MatchList matches={matchesData} />
    <div className="mt-4 moreMatchesLinkWrap">
      <a
        className="flex items-center space-x-2 text-blue-500 moreMatchesLink hover:underline"
        href="https://www.bcci.tv/fixtures"
      >
        <span>See All</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.6 28.8L29.2686 25.1314C29.8935 24.5065 29.8935 23.4935 29.2686 22.8686L25.6 19.2M28.8 24L17.6 24M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </a>
    </div>
  </div>
);

export default MatchWidget;
