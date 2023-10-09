const create = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'Post Created successfully',
   });
};

const read = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'Post Read successfull',
   });
};

const deleted = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'Post Deleted successfully',
   });
};

const update = async (req, res) => {
   res.status(200).json({
      status: 'Success',
      data: 'Post Update successfull',
   });
};

module.exports = {
   create,
   read,
   deleted,
   update,
};
