namespace Animated
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void pictureBox1_MouseClick(object sender, MouseEventArgs e)
        {
            MessageLabel.Text = "Pacman is full. Thank you";
        }

        private void pictureBox1_MouseHover(object sender, EventArgs e)
        {
            MessageLabel.Text = "YUM, YUM!!";
        }

        private void pictureBox1_MouseLeave(object sender, EventArgs e)
        {
            MessageLabel.Text = "Pacman is hungry!!";
        }
    }
}