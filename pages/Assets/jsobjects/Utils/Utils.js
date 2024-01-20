export default {
  findAsset(asset_id) {
    return SelectQuery.data.find(obj => obj.asset_id === asset_id);
  }
}