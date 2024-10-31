using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using System.Timers;

namespace CookieClickerBackend
{
    public class Shop : GameController, IHostedService, IDisposable
    {
        private System.Timers.Timer aTimer;   
        public static int grandmaCount;
        private bool isRunning;

        public Task StartAsync(CancellationToken cancellationToken)
        {
            isRunning = true;
            Time();
            return Task.CompletedTask;
        }
        public Task StopAsync(CancellationToken cancellationToken)
        {
            isRunning = false;
            aTimer.Stop();
            return Task.CompletedTask;
        }
        public void Dispose()
        {
            aTimer?.Dispose();
        }
        private void AutoAction(Object source, ElapsedEventArgs e)
        {
            if (isRunning)
            {
                ActivateGrandma();
            }
        }

        public void Time()
        {
            aTimer = new System.Timers.Timer(1000);
            aTimer.Elapsed += AutoAction;
            aTimer.AutoReset = true;
            aTimer.Enabled = true;
        }
        public static int PurchaseGrandma()
        {
            if (cookieCount >= 100)
            {
                cookieCount -= 100;
                grandmaCount++;
            }
            return grandmaCount;
        }
        private void ActivateGrandma()
        {
            cookieCount += grandmaCount;
        }
    }
}