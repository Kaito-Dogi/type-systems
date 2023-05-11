package app.doggy.nominaltypingsample.ui.component

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
fun MultiColumnListItem(
  texts: List<String>,
  modifier: Modifier = Modifier,
) {
  Row(
    modifier = modifier
      .fillMaxWidth()
      .background(Color.Blue)
      .padding(16.dp),
  ) {
    texts.forEachIndexed { index, text ->
      Box(
        contentAlignment = Alignment.Center,
        modifier = modifier
          .fillMaxWidth()
          .weight(1f)
          .aspectRatio(1 / 1f)
          .background(Color.Cyan),
      ) {
        Text(text = text)
      }
      if (index < texts.size - 1) {
        Spacer(modifier = Modifier.width(16.dp))
      }
    }
  }
}

@Preview
@Composable
fun MultiColumnListItemPreview() {
  MaterialTheme {
    MultiColumnListItem(
      texts = listOf("column1", "column2"),
    )
  }
}
