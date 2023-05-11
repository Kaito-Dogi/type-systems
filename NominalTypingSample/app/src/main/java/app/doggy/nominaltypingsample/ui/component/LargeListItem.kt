package app.doggy.nominaltypingsample.ui.component

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview

@Composable
fun LargeListItem(
  text: String,
  modifier: Modifier = Modifier,
) {
  Box(
    modifier = modifier
      .fillMaxWidth()
      .aspectRatio(1 / 1f)
      .background(Color.Red),
    contentAlignment = Alignment.Center,
  ) {
    Text(
      text = text,
      color = Color.White,
    )
  }
}

@Preview
@Composable
private fun LargeListItemPreview() {
  MaterialTheme {
    LargeListItem(text = "LargeListItem")
  }
}
