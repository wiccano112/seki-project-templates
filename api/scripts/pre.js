module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (API):');
    console.log('> PRE: WELCOME TO RPMLABS:');
    
    const rc = args.rc;
    await runner.execute([
      'npm install -D @nx/nest',
      `npx nx g @nx/nest:app ${rc.path}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch(ex) {
    console.error(ex);
    throw new Error('failed to install api pre-requisites');
  }
}