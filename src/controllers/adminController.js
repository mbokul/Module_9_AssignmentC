const create = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'Admin Created successfully',
   });
};

const read = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'Admin Read successfull',
   });
};

const deleted = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'Admin Deleted successfully',
   });
};

const update = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'Admin Update successfull',
   });
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
