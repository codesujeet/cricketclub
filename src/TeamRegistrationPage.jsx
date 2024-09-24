import React, { useState } from 'react';

const TeamRegistrationPage = () => {
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [players, setPlayers] = useState(['']);
  const [logo, setLogo] = useState(null);
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [teamType, setTeamType] = useState('Men');
  const [description, setDescription] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handlePlayerChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const addPlayer = () => {
    setPlayers([...players, '']);
  };

  const clearPlayers = () => {
    setPlayers(['']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamData = {
      teamName,
      captainName,
      players,
      logo,
      contactEmail,
      contactPhone,
      teamType,
      description,
    };
    console.log('Team Registration Data:', teamData);
    // Show confirmation message
    setConfirmationMessage(`Team "${teamName}" registered successfully!`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Team Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="team-name">
              Team Name
            </label>
            <input
              type="text"
              id="team-name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="captain-name">
              Captain Name
            </label>
            <input
              type="text"
              id="captain-name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={captainName}
              onChange={(e) => setCaptainName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Players</label>
            {players.map((player, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={player}
                  onChange={(e) => handlePlayerChange(index, e.target.value)}
                  placeholder={`Player ${index + 1}`}
                  required
                />
                {index === players.length - 1 && (
                  <button
                    type="button"
                    className="px-3 py-1 ml-2 text-white bg-blue-500 rounded"
                    onClick={addPlayer}
                  >
                    Add Player
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="team-logo">
              Team Logo
            </label>
            <input
              type="file"
              id="team-logo"
              accept="image/*"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="contact-email">
              Contact Email
            </label>
            <input
              type="email"
              id="contact-email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="contact-phone">
              Contact Phone
            </label>
            <input
              type="tel"
              id="contact-phone"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="team-type">
              Team Type
            </label>
            <select
              id="team-type"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={teamType}
              onChange={(e) => setTeamType(e.target.value)}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Mixed">Mixed</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="description">
              Team Description
            </label>
            <textarea
              id="description"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description about the team"
            ></textarea>
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="w-full px-4 py-2 text-white transition bg-red-500 rounded hover:bg-red-600"
              onClick={clearPlayers}
            >
              Clear Players
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
          >
            Register Team
          </button>
        </form>
        {confirmationMessage && (
          <div className="mt-4 text-center text-green-600">
            {confirmationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamRegistrationPage;
