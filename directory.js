const path = require("path");

export class Directory {
  get_path_name = () => path.dirname(__filename);
  get_file_name = () => path.basename(__filename);
  get_extension_name = () => path.extname(__filename);
  get_base_root_ext_dir_name = () => path.parse(__filename);
}
