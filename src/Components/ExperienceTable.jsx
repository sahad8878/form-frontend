import React from 'react';

const ExperienceTable = ({ experiences, onExperienceChange }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Designation</th>
          <th>Time Period</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {experiences.map((experience, index) => (
          <tr key={index}>
            <td>
              <input
                type="text"
                value={experience.companyName}
                onChange={e => onExperienceChange(index, 'companyName', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={experience.designation}
                onChange={e => onExperienceChange(index, 'designation', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={experience.timePeriod}
                onChange={e => onExperienceChange(index, 'timePeriod', e.target.value)}
              />
            </td>
            <td>
              {/* Add delete button here */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExperienceTable;
