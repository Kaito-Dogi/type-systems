package app.doggy.nominaltypingsample.ui.screen.home

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import app.doggy.nominaltypingsample.ui.component.LargeListItem
import app.doggy.nominaltypingsample.ui.component.ListItem
import app.doggy.nominaltypingsample.ui.component.MultiColumnListItem

@Composable
fun HomeScreen(
  uiModels: List<HomeScreenUiModel>,
  modifier: Modifier = Modifier,
) {
  LazyColumn(
    verticalArrangement = Arrangement.spacedBy(16.dp),
    modifier = modifier.fillMaxSize(),
  ) {
    items(
      items = uiModels,
      key = { it.id },
    ) { uiModel ->
      when (uiModel) {
        is HomeScreenUiModel.ListItemUiModel -> ListItem(text = uiModel.text)
        is HomeScreenUiModel.LargeListItemUiModel -> LargeListItem(text = uiModel.text)
        is HomeScreenUiModel.MultiColumnListItemUiModel -> MultiColumnListItem(texts = uiModel.texts)
      }
    }
  }
}

@Preview
@Composable
fun HomeScreenPreview() {
  MaterialTheme {
    HomeScreen(uiModels = mockHomeScreenUiModels)
  }
}
