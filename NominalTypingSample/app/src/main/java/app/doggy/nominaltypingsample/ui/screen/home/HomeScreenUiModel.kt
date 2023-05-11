package app.doggy.nominaltypingsample.ui.screen.home

sealed interface HomeScreenUiModel {
  val id: String

  data class ListItemUiModel(
    override val id: String,
    val text: String,
  ) : HomeScreenUiModel

  data class LargeListItemUiModel(
    override val id: String,
    val text: String,
  ) : HomeScreenUiModel

  data class MultiColumnListItemUiModel(
    override val id: String,
    val texts: List<String>,
  ) : HomeScreenUiModel
}

val mockHomeScreenUiModels = listOf(
  HomeScreenUiModel.LargeListItemUiModel(id = "l0", text = "large"),
  HomeScreenUiModel.ListItemUiModel(id = "i0", text = "item"),
  HomeScreenUiModel.MultiColumnListItemUiModel(id = "m0", texts = listOf("column1", "column2")),
  HomeScreenUiModel.ListItemUiModel(id = "i1", text = "item"),
  HomeScreenUiModel.MultiColumnListItemUiModel(id = "m1", texts = listOf("column1", "column2", "column3")),
  HomeScreenUiModel.ListItemUiModel(id = "i2", text = "item"),
  HomeScreenUiModel.LargeListItemUiModel(id = "l1", text = "large"),
  HomeScreenUiModel.ListItemUiModel(id = "i3", text = "item"),
  HomeScreenUiModel.MultiColumnListItemUiModel(id = "m2", texts = listOf("column1", "column2")),
  HomeScreenUiModel.ListItemUiModel(id = "i4", text = "item"),
  HomeScreenUiModel.MultiColumnListItemUiModel(id = "m3", texts = listOf("column1", "column2", "column3")),
  HomeScreenUiModel.ListItemUiModel(id = "i5", text = "item"),
)
