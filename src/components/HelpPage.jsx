const HelpPage = () => {
    return (
        <div className="rightPage helpPage">
            <div className="helpText">
                <h1>Extracting Guide</h1>
                <p>To extract money, simply click or tap on the gem on the extract page. Doing so will add money to your balance at a random amount depending on your upgrades.</p>
            </div>
            <div className="helpText">
                <h1>Inventory Guide</h1>
                <p>The items that you own will be shown on the inventory page. You can sell any item that you own to gain money that is equal to the value of the item. If the item is a sample, you can choose to open either 1, 2, 3, 4, or 5 of them at once depending on how many you own. Going into the sample of your choice, you can see the artifacts that it is possible to obtain from that sample. When opening a sample each artifact has a different rarity, brown for terrible, grey for common, green for uncommon, blue for rare, purple for unique, red for mythical, and rainbow for godly. The value goes up from terrible to godly. When opening a sample the artifact inside may display two yellow rings around it, this indicates that the item is certified. Having a certified item means its value is double what it would usually be.</p>
            </div>
            <div className="helpText">
                <h1>Shop Guide</h1>
                <p>This is where you can buy the samples of your choice. Each sample is different and the artifacts that you can obtain from each one are also different. The value of the samples goes from least to most from the top down.</p>
            </div>
            <div className="helpText">
                <h1>Upgrades Guide</h1>
                <p>Each upgrade grants the player a different thing. The level of the upgrade is shown to the right of the upgrade name and to the left of the buy button. The certified upgrade does not showcase the level of the upgrade, but rather the chance of your item being certified when you open a sample. The button shows how much the upgrade costs. The extract upgrade when purchased makes it so the player gains more money when extracting. The luck upgrade gives you a higher chance at finding a more rare artifact. The certified upgrade gives you a higher chance of finding a certified artifact, the chance is indicated by the percentage. Finally, the enhance upgrade allows for easier enhancing as it makes the enhancing faster.</p>
            </div>
            <div className="helpText">
                <h1>Enhancing Guide</h1>
                <p>By clicking on the bolt in the center of the lightblue circle, it will open a menu that showcases all of the artifacts that are eligble to enhance. Selecting one of these will start the enhancing process. You must keep the enhancing beam stable on the artifact that you are trying to enhance which is indicated by the green area in the center of the center bar. You must move the red tick with the left and right arrow keys to keep it in the center. The time that you have left before your artifact is burned in the lava is displayed above the enhancing progress. The enhancing progress is displayed in the center of the screen. This shows your progress for enhancing your item. Once it reaches 100%, your item is enhanced and the value is doubled. Failing to reach 100% before the time reaches 0 will result in you losing your artifact completely.</p>
            </div>
        </div>
    )
}
export default HelpPage;