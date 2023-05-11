package app.doggy.nominaltypingsample

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme
import app.doggy.nominaltypingsample.ui.screen.home.HomeScreen
import app.doggy.nominaltypingsample.ui.screen.home.mockHomeScreenUiModels

class MainActivity : ComponentActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContent {
      MaterialTheme {
        HomeScreen(uiModels = mockHomeScreenUiModels)
      }
    }
  }
}
