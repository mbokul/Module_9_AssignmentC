const create = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'User Created successfully',
   });
};

const read = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'User Read successfull',
   });
};

const deleted = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'User Deleted successfully',
   });
};

const update = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'User Update successfull',
   });
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
