const db = require("../DB/Database.js");

exports.addSchool = (req,res)=>{
    // get payload data form data
    const { name, address, latitude, longitude } = req.body
    //check value is fields
    if ( !name || !address ||  !latitude || !longitude ) {
        res.status(400).json({ error: 'All fields are required' })
    }
    // mysql insert query
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query,[name, address, latitude, longitude],(err,result)=>{
        if (err) {
            return res.status(500).json({ error: 'Failed to add school' });
        }
        res.status(201).json({ message: 'School added successfully!', id: result.insertId });
    })
}


exports.listSchools = (req,res) =>{
    const { latitude, longitude } = req.query;
    if ( !latitude || !longitude ) {
        res.status(400).json({ error: 'User latitude and longitude are required' })
    }
    const query = 'SELECT id, name, address, latitude, longitude FROM schools';
    db.query(query,(err,result)=>{
        
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch schools' });
        }
        const userLocation = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };
        console.log(result);

        // Calculate distances and sort by proximity
        const sortedSchools = result.map((school) => {
        const distanceInkm = calculateDistance(userLocation, {
          latitude: school.latitude,
          longitude: school.longitude,
        });
        return { ...school, distanceInkm };
      }).sort((a, b) => a.distanceInkm - b.distanceInkm);

      res.status(200).json(sortedSchools);      
    });
};


// Utility function to calculate geographical distance
function calculateDistance(loc1, loc2) {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
  
    const R = 6371; // Earth's radius in km
    const dLat = toRadians(loc2.latitude - loc1.latitude);
    const dLon = toRadians(loc2.longitude - loc1.longitude);
  
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRadians(loc1.latitude)) * Math.cos(toRadians(loc2.latitude)) * Math.sin(dLon / 2) ** 2;
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // Distance in km
};


// Delete School Functionality
exports.deleteSchool = (req, res) => {
    const { id } = req.params; 
    if (!id) {
      return res.status(400).json({ error: 'School ID is required' });
    }
    const query = 'DELETE FROM schools WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete school' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'School not found' });
      }
  
      res.status(200).json({ message: 'School deleted successfully!' });
    });
  };
  