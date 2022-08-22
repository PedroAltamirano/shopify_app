import { DataTypes } from "sequelize";

const ClicksDef = (sequelize) =>
  sequelize.define("Clicks", {
    click_type: DataTypes.STRING,
  });

export default ClicksDef;
