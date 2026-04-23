const AnalysisResult = ({ data }) => {
  const {
    scene_title,
    description,
    people,
    objects,
    environment,
    visual,
    animals,
    text_in_image,
    interesting_facts,
  } = data;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Scene Title */}
      <div className="bg-indigo-900 border border-indigo-700 rounded-2xl p-5">
        <p className="text-indigo-300 text-xs uppercase tracking-widest mb-1">
          Scene Title
        </p>
        <h2 className="text-white text-2xl font-bold">{scene_title}</h2>
      </div>

      {/* Description */}
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
        <p className="text-indigo-300 text-xs uppercase tracking-widest mb-2">
          Description
        </p>
        <p className="text-gray-300 text-base leading-relaxed">{description}</p>
      </div>

      {/* Environment */}
      {environment && (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
          <p className="text-indigo-300 text-xs uppercase tracking-widest mb-3">
            Environment
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '📍', label: 'Setting', value: environment.setting },
              {
                icon: '🗺️',
                label: 'Location',
                value: environment.location_type,
              },
              { icon: '🕐', label: 'Time', value: environment.time_of_day },
              { icon: '🌤️', label: 'Weather', value: environment.weather },
              { icon: '🍂', label: 'Season', value: environment.season },
              { icon: '💡', label: 'Lighting', value: visual?.lighting },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl p-3 flex items-center gap-3"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  <p className="text-white text-sm font-semibold">
                    {item.value || 'Unknown'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Visual */}
      {visual && (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
          <p className="text-indigo-300 text-xs uppercase tracking-widest mb-3">
            Visual Details
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">🎭 Mood:</span>
              <span className="text-white font-semibold">{visual.mood}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">📷 Composition:</span>
              <span className="text-white font-semibold">
                {visual.composition}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {visual.dominant_colors?.map((color, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600"
                >
                  🎨 {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* People */}
      {people && people.count > 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
          <p className="text-indigo-300 text-xs uppercase tracking-widest mb-3">
            People Detected ({people.count})
          </p>
          <div className="flex flex-col gap-3">
            {people.details?.map((person, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-700 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">👤</span>
                  <p className="text-white font-semibold">Person {i + 1}</p>
                  <span className="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-700">
                    {person.emotion}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p className="text-gray-500">
                    Age:{' '}
                    <span className="text-gray-300">{person.age_group}</span>
                  </p>
                  <p className="text-gray-500">
                    Gender:{' '}
                    <span className="text-gray-300">
                      {person.gender_presentation}
                    </span>
                  </p>
                  <p className="text-gray-500">
                    Action:{' '}
                    <span className="text-gray-300">{person.action}</span>
                  </p>
                  <p className="text-gray-500">
                    Clothing:{' '}
                    <span className="text-gray-300">{person.clothing}</span>
                  </p>
                </div>
                {person.description && (
                  <p className="text-gray-400 text-xs mt-2 italic">
                    {person.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Animals */}
      {animals && animals.length > 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
          <p className="text-indigo-300 text-xs uppercase tracking-widest mb-3">
            Animals Detected ({animals.length})
          </p>
          <div className="flex flex-col gap-2">
            {animals.map((animal, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span>🐾</span>
                  <p className="text-white font-semibold">{animal.name}</p>
                </div>
                <p className="text-gray-400 text-sm">{animal.action}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detected Objects */}
      {objects && objects.length > 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
          <p className="text-indigo-300 text-xs uppercase tracking-widest mb-3">
            Detected Objects ({objects.length})
          </p>
          <div className="flex flex-col gap-2">
            {objects.map((obj, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl px-4 py-3"
              >
                <div>
                  <p className="text-white text-sm font-semibold">{obj.name}</p>
                  <p className="text-gray-500 text-xs">
                    {obj.category} • {obj.location}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full
                  ${
                    obj.confidence === 'High'
                      ? 'bg-green-900 text-green-400 border border-green-700'
                      : obj.confidence === 'Medium'
                      ? 'bg-yellow-900 text-yellow-400 border border-yellow-700'
                      : 'bg-red-900 text-red-400 border border-red-700'
                  }`}
                >
                  {obj.confidence}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Text in Image */}
      {text_in_image && text_in_image.length > 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
          <p className="text-indigo-300 text-xs uppercase tracking-widest mb-3">
            Text Found in Image
          </p>
          <div className="flex flex-wrap gap-2">
            {text_in_image.map((text, i) => (
              <span
                key={i}
                className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600"
              >
                📝 {text}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Interesting Facts */}
      {interesting_facts && interesting_facts.length > 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
          <p className="text-indigo-300 text-xs uppercase tracking-widest mb-3">
            Interesting Observations
          </p>
          <div className="flex flex-col gap-2">
            {interesting_facts.map((fact, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-gray-900 rounded-xl px-4 py-3"
              >
                <span className="text-yellow-400 mt-0.5">💡</span>
                <p className="text-gray-300 text-sm">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisResult;
